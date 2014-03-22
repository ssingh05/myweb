 <?php include '../includes/header.php'; ?>
    <!-- content-wrap -->
    <div id="content-wrap">
        <!-- content -->
        <div id="content" class="clearfix">
            <!-- main -->
            <div id="canvasdiv">
                <div id="previewpannels">
                    <ul id="zoomimagesets">
                        <li><a src= "#" id="zoomin" alt="page1">Zoom In</a></li>
                        <li><a src="#" id="zoomout" alt="page1">Zoom Out</a></li>
                        <li><a src= "#" id="zoomreset" alt="page1">Reset</a></li>
                    </ul>
                    <div id="imagepreview">
                        <img src= "#" id="currentpreviewimage" alt="page1"/>
                    </div>
                </div>   
<img src="../images/zoom/left.png" alt="right" id="right">
                <div class="previewlistpanel">
                   <ul class="previewlist">
                   </ul>
                </div>
                    <img src="../images/zoom/right.png" alt="right" id="left">                 
           </div>
             <p>Download the source code from -<a href="../files/download/imaege-zoom.zip">HERE</a></p> 
            <div id="imgloading">
                <p style="float: left;">Please wait....</p> 
            </div>

            <!-- content -->
        </div>
        <!-- /content-out -->
    </div>
    <!-- extra -->
    <?php include '../includes/footer.php'; ?>
