<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head profile="http://gmpg.org/xfn/11">
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>404 - PAGE NOT FOUND</title>

				<!-- Add Slide Outs -->
				<script src="http://code.jquery.com/jquery-1.9.1.js"></script>        
				<script src="http://suspended.hostgator.com/js/simple-expand.min.js"></script>
        
        <style type="text/css">
        body{padding:0;margin:0;font-family:helvetica;}
        #container{margin:20px auto;width:868px;}
        #container #top404{background-image:url('http://suspended.hostgator.com/images/404top.jpg');background-repeat:no-repeat;width:868px;height:168px;}
        #container #mid404{background-image:url('http://suspended.hostgator.com/images/404mid.gif');background-repeat:repeat-y;width:868px;}
        #container #mid404 #gatorbottom{position:relative;left:39px;float:left;}
        #container #mid404 #xxx{float:left;padding:40px 237px 10px;}
        #container #mid404 #content{float:left;text-align:center;width:868px;}
        #container #mid404 #content #errorcode{font-size:30px;font-weight:800;}
        #container #mid404 #content #banner{margin:20px 0 0 ;}
        #container #mid404 #content #hostedby{font-weight:800;font-size:25px;font-style:italic;margin:20px 0 0;}
        #container #mid404 #content #coupon{color:#AB0000;font-size:22px;font-style:italic;}
        #container #mid404 #content #getstarted a{color:#AB0000;font-size:31px;font-style:italic;font-weight:800;}
        #container #mid404 #content #getstarted {margin:0 0 35px;}
        #container #bottom404{background-image:url('http://suspended.hostgator.com/images/404bottom.gif');background-repeat:no-repeat;width:868px;height:14px;}
        #container #mid404 #content #faq_container {margin: 5px 0 5px 0; padding: 10px 0 10px 0; clear:both;}
        #container #mid404 #content #accordion{font-size: 90%; width: 650px; min-height: 100px; margin: 0 auto; text-align: center;}
        #container #mid404 #content #accordion ul {text-align: left;}
        #container #mid404 #content #accordion ol {text-align: left;}
        #container #mid404 #content #accordion li {font-size: 90%;}
        #container #mid404 #content #accordion p {font-size: 95%; }
        #container #mid404 #content #accordion h3 {font-weight: bold;}
		  #container #mid404 #content #accordion h4 {font-weight: bold; font-style: italic;}
		  .content {display:none;}
		  .first {color: #ff6600;}
		  .second {color: #3b5998;}
		  .third {color: #198c19;}
		  .code { background-color: #e5e5e5; border: 2px solid #ede1d1; padding: 5px 5px 5px 5px; text-align: left;}
		  .shell{border: 2px solid gray; background-color: black; color: white; text-align: left;}
        </style>
        
</head>
<body>
<div id="container">
        <div id="top404"></div>
        <div id="mid404">

                <div id="gatorbottom"><img src="http://suspended.hostgator.com/images/gatorbottom.png" alt="" /></div>
                <div id="xxx"><img src="http://suspended.hostgator.com/images/x.png" alt="" /></div>
        <div id="content">
           <div id="errorcode">ERROR 404 - PAGE NOT FOUND</div>
             <div id="faq_container">
					 <div id="accordion">
					 	<div id="why">
						 <h3><a class="expander" href=#>Why am I seeing this page?</a></h3>
							<div class="content">
									<p>404 means the file is not found. If you have already uploaded the file then the name may be misspelled or it is in a different folder.</p>
									<h4><u>Other Possible Causes</u></h4>
									<p>You may get a 404 error for images because you have Hot Link Protection turned on and the domain is not on the list of authorized domains.</p>
									<p>If you go to your temporary url (http://ip/~username/) and get this error, there maybe a problem with the rule set stored in an .htaccess file. You can try renaming that file to .htaccess-backup and refreshing the site to see if that resolves the issue.</p>
									<p>It is also possible that you have inadvertently deleted your document root or the your account may need to be recreated. Either way, please contact HostGator immediately via phone or live chat so we can diagnose the problem.</p>
									<p>Are you using WordPress? See the Section on 404 errors after clicking a link in WordPress.</p>
							</div>
						</div>
						<div id="spell">
						<h3><a class="expander" href=#>How to find the correct spelling and folder</a></h3>
							<div class="content">
								<h4><u>Missing or Broken Files</u></h4>
								<p>When you get a 404 error be sure to check the URL that you are attempting to use in your browser.This tells the server what resource it should attempt to request.</p>
									<blockquote class="code">http://example.com/example/Example/help.html</blockquote>
								<p>In this example the file must be in public_html/example/Example/</p>
								<p>Notice that the <strong>CaSe</strong> is important in this example. On platforms that enforce case-sensitivity <strong>e</strong>xample and <strong>E</strong>xample are not the same locations.</p>
								<p>For addon domains, the file must be in public_html/addondomain.com/example/Example/ and the names are case-sensitive.</p>
								<h4><u>Broken Image</u></h4>
								<p>When you have a missing image on your site you may see a box on your page with with a red <span style="color:#FF0000;"><strong>X</strong></span> where the image is missing. Right click on the <span style="color:#FF0000;"><strong>X</strong></span> and choose Properties. The properties will tell you the path and file name that cannot be found.</p>
								<p>This varies by browser, if you do not see a box on your page with a red <span style="color:#FF0000;"><strong>X</strong></span> try right clicking on the page, then select View Page Info, and goto the Media Tab.</p>
									<blockquote class="code">http://example.com/images/banner.PNG</blockquote>
								<p>In this example the image file must be in public_html/images/</p>
								<p>Notice that the <strong>CaSe</strong> is important in this example. On platforms that enforce case-sensitivity <strong>PNG</strong> and <strong>png</strong> are not the same locations.</p>
							</div>
						</div>
						<div id="wp">
						<h3><a class="expander" href=#>404 Errors After Clicking WordPress Links</a></h3>
							<div class="content">
									<p>When working with WordPress, 404 Page Not Found errors can often occur when a new theme has been activated or when the rewrite rules in the .htaccess file have been altered.</p>
									<p>When you encounter a 404 error in WordPress, you have two options for correcting it.</p>
								<h4><u>Option 1: Correct the Permalinks</u></h4>
									<ol>
										<li>Log in to WordPress.</li>
										<li>From the left-hand navigation menu in WordPress, click&nbsp;<strong>Settings</strong> &gt; <strong>Permalinks</strong> (Note the current setting. If you are using a custom structure, copy or save the custom structure somewhere.)</li>
										<li>Select&nbsp; <strong>Default</strong>.</li>
										<li>Click&nbsp;<strong>Save Settings</strong>.</li>
										<li>Change the settings back to the previous configuration (before you selected Default). Put the custom structure back if you had one.</li>
										<li>Click&nbsp;<strong>Save Settings</strong>.</li>
									</ol>
								<p>This will reset the permalinks and fix the issue in many cases. If this doesn't work, you may need to edit your .htaccess file directly.</p>
								<h4><u>Option 2: Modify the .htaccess File</u></h4>
									<p>Add the following snippet of code<em> </em>to the top of your .htaccess file:</p>
									<div class="code">
									<p>
										# BEGIN WordPress<br>
										&lt;IfModule mod_rewrite.c&gt;<br>
										RewriteEngine On<br>
										RewriteBase /<br>
										RewriteRule ^index.php$ - [L]<br>
										RewriteCond %{REQUEST_FILENAME} !-f<br>
										RewriteCond %{REQUEST_FILENAME} !-d<br>
										RewriteRule . /index.php [L]<br>
										&lt;/IfModule&gt;<br>
										# End WordPress
									</p>
									</div>
								<p>If your blog is showing the wrong domain name in links, redirecting to another site, or is missing images and style, these are all usually related to the same problem: you have the wrong domain name configured in your WordPress blog.</p>						
							</div>
						</div>
						<div id="edit_access">
						<h3><a class="expander" href=#>How to modify your .htaccess file</a></h3>
							<div class="content">
								<p>The .htaccess file contains directives (instructions) that tell the server how to behave in certain scenarios and directly affect how your website functions.</p>
								<p>Redirects and rewriting URLs are two very common directives found in a .htaccess file, and many scripts such as WordPress, Drupal, Joomla and Magento add directives to the .htaccess so those scripts can function.</p>
								<p>It is possible that you may need to edit the .htaccess file at some point, for various reasons.This section covers how to edit the file in cPanel, but not what may need to be changed.(You may need to consult other articles and resources for that information.)</p>
								<h4><u>There are Many Ways to Edit a .htaccess File</u></h4>
									<ul>
										<li>Edit the file on your computer and upload it to the server via FTP</li>
										<li>Use an FTP program's Edit Mode</li>
										<li>Use SSH and a text editor</li>
										<li>Use the File Manager in cPanel</li>
									</ul>
								<p>The easiest way to edit a .htaccess file for most people is through the File Manager in cPanel.</p>
								<h4><u>How to Edit .htaccess files in cPanel's File Manager</u></h4>
								<p>Before you do anything, it is suggested that you backup your website so that you can revert back to a previous version if something goes wrong.</p>
								<h4><u>Open the File Manager</u></h4>
								<ol>
									<li>Log into cPanel.</li>
									<li>In the Files section, click on the <strong>File Manager</strong> icon.</li>
									<li>Check the box for&nbsp;<strong>Document Root for</strong> and select the domain name you wish to access from the drop-down menu.</li>
									<li>Make sure&nbsp;<strong>Show Hidden Files (dotfiles)</strong>" is checked.</li>
									<li>Click&nbsp;<strong>Go</strong>. The File Manager will open in a new tab or window.</li>
									<li>Look for the .htaccess file in the list of files. You may need to scroll to find it.</li>
								</ol>
								<h4><u>To Edit the .htaccess File</u></h4>
								<ol>
									<li>Right click on the <strong>.htaccess file</strong> and click&nbsp;<strong>Code Edit</strong> from the menu. Alternatively, you can click on the icon for the .htaccess file and then click on the <strong>Code Editor</strong> icon at the top of the page.</li>
									<li>A dialogue box may appear asking you about encoding. Just click&nbsp;<strong>Edit</strong> to continue. The editor will open in a new window.</li>
									<li>Edit the file as needed.</li>
									<li>Click&nbsp;<strong>Save Changes</strong> in the upper right hand corner when done. The changes will be saved.</li>
									<li>Test your website to make sure your changes were successfully saved. If not, correct the error or revert back to the previous version until your site works again.</li>
									<li>Once complete, you can click&nbsp;<strong>Close</strong> to close the File Manager window.</li>
								</ol>
							</div>
						</div>
					</div>
				</div> 
                <div id="banner">

                        <object width="728" height="90"><param name="movie" value="http://suspended.hostgator.com/images/hg728x90.swf">

                                <embed src="http://suspended.hostgator.com/images/hg728x90.swf?clickTAG=http://secure.hostgator.com/cgi-bin/affiliates/clickthru.cgi?id=offer404" width="728" height="90"></embed>
                        </object>
                </div>

                <div id="hostedby">This site is hosted by HostGator!</div>
                <div id="coupon">Build your website today and get 20&#37; off!   Coupon code: "OFFER404"</div>

                <div id="getstarted"><a href="http://www.hostgator.com/?utm_source=internal&utm_medium=link&utm_campaign=offer404" title="HostGator Web Hosting" >CLICK HERE TO GET STARTED</a></div>

        </div>

        <div style="clear:left;"></div>
        </div>
        <div id="bottom404"></div>
</div>

    <script type="text/javascript">
        $(function () {
            $('.expander').simpleexpand();
            prettyPrint();
        });
    </script>

</body>

</html>
