class Src_loader
  attr_accessor :src_path, :file_name_list, :list

  def format_path
    @list = @file_name_list.map{|v| @src_path + v}
  end

  def load
    files = []
    puts '--- load start'
    if @list.nil? 
      format_path
    end
    @list.each{ |path|
      file = open(path)
      files << file.read
      file.close
      puts "--- #{path} loaded"
    }
    puts '--- load end'
    files.join
  end
end

class File_maker
  attr_accessor :content, :api_doc
  def format_api_doc
    #取出公共api的注释（不包含private）
    @api_doc = @content.scan(/\/\*![^Private][^*]*\*+(?:[^*\/][^*]*\*+)*\//)
    @api_doc.map!{|line|
      line.gsub(/^\s+|^\t+/, "")  #删除行首和行尾的控制、制表符
        .gsub(/(^[@-])/, "\n\\1") #普通行增加换行（markdown里两个换行才能正常换行）
        .gsub(/\/\*\!/, "===")    #每个注释段落前面增加分隔线
        .gsub(/\*\//, "\n")       #注释段落最后增加换行
        .gsub(/@Title:\s*/, "#")  #整个文档的标题
        .gsub(/(@Link\:\s*)(.+$)/, '\\1<\\2>')  #链接
        .gsub(/@Name:\s*/, "###") #api名称
        .gsub(/(@Usage:.*\n)/, "\\1\n```\n")  #用例
        .gsub(/(^\|.*\n*)(^[^\|])/, "\\1```\\2")  #用例用```括起来
        .gsub(/^\|/, '')  #去掉用例每行前面的的|
    }
    @api_doc = @api_doc.join
  end

  def export_api_doc(f)
    if @api_doc.nil?
      format_api_doc
    end
    export(f, @api_doc)
  end

  def export(f, c)
    File.open(f, 'w') do |file|
      file.write(c)
    end
    puts "--- export #{f} done"
  end

  def export_whole_file(f)
    export f, @content
  end
end

loader = Src_loader.new
loader.src_path = '../src/geomap.'
loader.file_name_list = %W(
    prefix
    convertor.js
    svg.js
    mosaic.js
    suffix
)

maker = File_maker.new
maker.content = loader.load

maker.export_whole_file '../src/geomap.js'
#maker.export_api_doc './api.md'

