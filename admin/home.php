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
						include('checklogin.php');
						?>
						<body>
						<h3>Welcome <?php echo $login_session; ?></h3>
							<h3>Cretae User </h3>
							<form action="createuser" method="POST" >
								<label>UserName :</label>
								<input type="text" name="username"/><br />
								<label>Password :</label>
								<h2></h2>
								<input type="password" name="password"/>
								<input type="submit" value="Submit" class="button" id="handler"/><br />
							</form>
					</div>
                    <a href="login" class="more">Back</a><a href="logout" class="more">Logout</a>
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
