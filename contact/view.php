<!DOCTYPE html>
<!DOCTYPE html>
<head>
   <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
   <meta charset="utf-8"/>
   <meta name="description" content="">
   <meta name="author" content="">
   <title>Surendra free lancer web developer|surendra-web</title>
    <script type="text/javascript">
     $(document).ready(function() {

    $('a').click(function(){

               $( "#dialog-confirm" ).dialog({
            resizable: false,
            
            modal: true,
            buttons: {
             "Delete": function() {
               $( this ).dialog( "close" );
             },
             Cancel: function() {
               $( this ).dialog( "close" );
             }
            }
            }); 

           });
     });

       
    </script>
</head>
<body id="top">
    <!--header -->
    <?php include '../includes/header.php'; ?>
    <!-- content-wrap -->
    <div id="content-wrap">
        <!-- content -->
        <div id="content" class="clearfix">
            <!-- main -->
            <div id="main">
                <article class="post">
                    <?php

                      include("../dbconfig.php");
                        $viewtable = mysqli_connect("localhost","singh","5Tfzn{0kZ@oZ","personal");
                        // Check connection
                     
                        $result = mysqli_query($viewtable, "SELECT * FROM contactform ORDER BY contacts_order");
                       
                        echo "<table class='tableView'>
                        <tr>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Date</th>
                        <th>Email</th>
                        <th>Details</th>
                        <th>Edit</th>
                        <th>Delete</th>
                        </tr>";                        
                        
                        while($row = mysqli_fetch_array($result))
                        
                         //$key = $row['contacts_order'];
                        
                          {
                          echo "<tr>";  
                          echo "<td>" . $row['firstname'] . "</td>";
                          echo "<td>" . $row['lastname'] ."</td>";
                          echo "<td>" . $row['dates'] ."</td>";
                          echo "<td>" . $row['email'] ."</td>";
                          echo "<td>" . $row['details']. "</td>";
                          echo "<td>" . "<a href='delete?id={$row['contactform']}'>" . "Delete" . "</a>" . "</td>";
                          echo "</tr>";
                          }
                          echo "</table>";
                        
                        
                        mysqli_close($viewtable);
                        ?>
                </article>
                <div id="dialog-confirm" title="Empty the recycle bin?">
                    <p><span class="ui-icon ui-icon-alert" style="float:left; margin:0 7px 20px 0;"></span>These items will be permanently deleted and cannot be recovered. Are you sure?</p>
                </div>
                <!-- /main -->
            </div>
            <!-- sidebar -->
            <?php include '../includes/sidenavOther.php'; ?>
            <!-- content -->
        </div>
        <!-- /content-out -->
    </div>
    <!-- extra -->
    <?php include '../includes/footer.php'; ?>
</body>
</html