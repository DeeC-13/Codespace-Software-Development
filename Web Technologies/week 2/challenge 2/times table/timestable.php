<!doctype html>
<html lang="en">
    <body>
        <h2> Times Tables</h2>
            <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="get">
        
                <div class = container>
                    <div class= "row"> 
                        <label for="number">Enter a number: </label>
                        <input type="number" name="num">
                    </div>
                <div class= "row">
                    <button type="submit" name = "submit">Submit</button>
                </div>   

                <div class= "row">
                    <p readonly ="readonly" value = "<?php echo $num ?>" ></p> 
                </div>    
            </div> 

        </form>
        <br>

<?php 
    if ($_SERVER["REQUEST_METHOD"] == "GET") {

        if (isset($_GET['submit'])) {
            $num = $_GET['num'];

            if (is_numeric($num)) {
                
                function multiplication($num){

                   echo "<h3>Multiplication table of: $num</h3><br>";

                       for ($i = 1; $i < 11; $i++) {                                    

                        echo "$num x $i = " . $i * $num . "<br>";
                    }    
                }
                
                multiplication($num);

            }
        }     
    }       

?>
 

   </body>

</html>
