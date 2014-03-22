
<!--header -->
<?php include '../includes/header.php'; ?>
  
<!-- content-wrap -->
<div id="content-wrap">

    <!-- content -->
    <div id="content" class="clearfix">

        <!-- main -->
        <div id="main">

            <article class="post">

<div class="contpara">

</div>

        


       

<div class="contpara">
<?php

$viewtable = mysqli_connect("localhost","root","","personal");

                $id = $_GET['id'];
                  mysqli_query($viewtable,"DELETE FROM contactform WHERE contactform='$id'");

?>


<a href="view">Back</a>


 </div>
 </div>

</article>


    <!-- content -->
  </div>

<!-- /content-out -->
</div>
    
<!-- extra -->
<?php include '../includes/footer.php'; ?>

