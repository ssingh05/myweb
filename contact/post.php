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
                            $con=mysqli_connect("localhost","singh","5Tfzn{0kZ@oZ","personal");
                            // Check connection
                            if (mysqli_connect_errno())
                              {
                              echo "Failed to connect to Server: " . mysqli_connect_error();
                              }
                            
                            $sql="INSERT INTO contactform (firstname, lastname, email, dates, details)
                            VALUES
                            ('$_POST[firstname]','$_POST[lastname]','$_POST[email]','$_POST[date]','$_POST[details]')";
                            
                            if (!mysqli_query($con,$sql))
                              {
                              die('Error: ' . mysqli_error($con));
                              }
                            echo "Thansk for contacting me, I will reply you soon.";
                            
                            mysqli_close($con);
                            ?>
                    </div>
                    <a href="../index" class="more">Back</a>
            </div>
            </article>
            <!-- sidebar -->
            <?php include '../includes/sidenavOther.php'; ?>
                <!-- /sidebar -->
            </div>
            <!-- content -->
        </div>
        <!-- /content-out -->
    </div>
    <!-- extra -->
    <?php include '../includes/footer.php'; ?>
