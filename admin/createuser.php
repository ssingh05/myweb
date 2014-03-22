<!DOCTYPE html>
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
    <meta charset="utf-8"/>
    <meta name="description" content="">
    <meta name="author" content="">
    <title>surendra</title>
    <link rel="stylesheet" type="text/css" media="screen" href="styles/main.css" />
    <link rel="stylesheet" href="styles/jquery-ui.css">
    <script src="scripts/jquery-1.9.1.js"></script>
    <script src="http://code.jquery.com/ui/1.10.4/jquery-ui.js"></script>
    <!-- // <script src="scripts/jquery-ui.js"></script> -->
    <script src="http://code.jquery.com/jquery-1.9.1.js"></script>
    <script src="http://code.jquery.com/ui/1.10.4/jquery-ui.js"></script
    <script src="scripts/jquery-1.10.2.min.js"></script>
    <script src="scripts/validation.js"></script>
    <script src="js/scrollToTop.js"></script>
    <script src="scripts/jquery.validate.js"></script>
    <script src="scripts/js.form.validator.js"></script>

</head>
<body id="top" onLoad="setTimeout('close_popup()', 3000)">
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
                            $con=mysqli_connect("localhost","root","","personal");
                            // Check connection
                            if (mysqli_connect_errno())
                              {
                              echo "Failed to connect to MySQL: " . mysqli_connect_error();
                              }

                             $check="SELECT * FROM users WHERE username = '$_POST[username]'";
                             $rs = mysqli_query($con,$check);
                                $data = mysqli_fetch_array($rs, MYSQLI_NUM);
                                if($data[0] > 1) {
                                    echo "User Already in Exists<br/>";
                                    
                                   }else {
                                    
                                    $sql="INSERT INTO users (username, password)VALUES('$_POST[username]','$_POST[password]')";
                                    
                                    if (!mysqli_query($con,$sql))
                                      {
                                      die('Error: ' . mysqli_error($con));
                                      }
                                    echo "You have creeated your account";
                                    
                                    mysqli_close($con);
                                   }          

                            ?>
                    </div>
                    <a href="login" class="more">Back</a>
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
    <?php include 'includes/footer.php'; ?>
</body>
</html>