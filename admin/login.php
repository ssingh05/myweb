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
						include("config.php");  

						session_start();

						if ($_SERVER["REQUEST_METHOD"] == "POST") {
						// username and password sent from Form 
							$username=addslashes($_POST['username']); 
							$password=addslashes($_POST['password']); 

							$sql="SELECT userid FROM users WHERE username='$username' and password='$password'";
							$queryresult=mysql_query($sql);
							$row=mysql_fetch_array($queryresult);
							$count=mysql_num_rows($queryresult);

						    if($count == 1){
						    	$_SESSION['login_user'] = $username;
						    	header("location: home");   	

						    }else{
						    	$error = "Your credential are invalid!";

						    }
						}

						?>

						<form action="" method="POST">
						<label>UserName :</label>
						<input type="text" name="username"/>
						<label>Password :</label>
						<input type="password" name="password"/>
						<input type="submit" value="Submit" class="button"/>
						</form>
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
    <?php include '../includes/footer.php'; ?>
