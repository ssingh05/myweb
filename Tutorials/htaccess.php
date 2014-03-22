<?php include '../includes/header.php'; ?>
    <!-- content-wrap -->
    <div id="content-wrap">
        <!-- content -->
        <div id="content" class="clearfix">
            <!-- main -->
            <div id="main">
                <article class="post">
                    <?php include '../includes/sidenavOther.php'; ?>  
                    <h4>Remove .php extention from url</h4>
                    <code>
                        RewriteEngine on   </br>

                        # Rewrite /foo/bar to /foo/bar.php </br>
                        RewriteRule ^([^.?]+)$ %{REQUEST_URI}.php [L]  </br>

                        # Return 404 if original request is /foo/bar.php  </br>
                        RewriteCond %{THE_REQUEST} "^[^ ]* .*?\.php[? ].*$"  </br>
                        RewriteRule .* - [L,R=404]  </br>

                        # NOTE! FOR APACHE ON WINDOWS: Add [NC] to RewriteCond like this: </br>
                        # RewriteCond %{THE_REQUEST} "^[^ ]* .*?\.php[? ].*$" [NC] </br></br>

                        <p>Uncomment the this line in Apache httpd.conf</p>
                        <p>LoadModule rewrite_module modules/mod_rewrite.so</p>                    
                    </code>
                    <!-- sidebar -->
                      
            </article>
                <!-- /main -->
            </div>  
            <!-- content -->
        </div>
        <!-- /content-out -->
    </div>
    <!-- extra -->
<?php include '../includes/footer.php'; ?>
