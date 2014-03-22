<?php include '../includes/header.php'; ?>
<!-- content-wrap -->
<div id="content-wrap">
    <!-- content -->
    <div id="content" class="clearfix">
        <!-- main -->
        <div id="main">
            <article class="post">
                <h3>Contact Me</h3>
                <form action="post" method="post" id="contactform">
                    <label for="firstname">First Name:</label> 
                    <input type="text" name="firstname" id="firstname" data-type='name'>  
                    <label for="lname">Last Name: </label> 
                    <input type="text" name="lastname" id="lname">  
                    <label for="email">Email Address:</label>        
                    <input type="text" name="email" id="email"> 
                    <label for="date">Date: </label> 
                    <input type="text" name="date" id="date">
                    <label for="details">Details:</label> 
                    <textarea name="details" id="details"> </textarea> 
                    <input type="submit" value="Submit" class="button" id="handler">
                </form>
                <!-- sidebar -->
                <?php include '../includes/sidenavOther.php'; ?>   
            </article>      
            <!-- /main -->
        </div>      
        <!-- content -->
    </div>
    <!-- /content-out -->
</div>
<!-- extra -->
<?php include '../includes/footer.php'; ?>