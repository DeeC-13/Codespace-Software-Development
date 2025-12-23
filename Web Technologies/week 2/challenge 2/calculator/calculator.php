<!DOCTYPE html>
<html lang="en">
    <body>
        <h2> Calculator</h2>
        <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="get">
    
            <div class = container>
                <div class= "row"> 
                    <label for="number">Number 1: </label>
                    <input type="number" value = "<?php $number1 ?>" id = "number1" name="number1">     
                </div> 
                
                <div class = "row"> 
                    <label for="number">Number 2: </label>
                    <input type="number" value = "<?php $number2 ?>" id = "number2" name="number2">
                </div>
            
                <div class= "row">
                    <input type="submit" name = "button" value = '+'>
                    <input type="submit" name = "button" value = '-'>
                    <input type="submit" name = "button" value = '*'>
                    <input type="submit" name = "button" value = '/'>

                <div class = "row"> 
                    <h3 readonly = "readonly" value = "<?php echo '<h3>Result: <b>$result</b></h3>' ?>">
                </div>

            </div>

        </form>
        <br>
    </body>
  
</html>

    <?php 

        if ($_SERVER["REQUEST_METHOD"] == "GET") {
                                
            if (isset($_GET['button'])) {

                //grab data from inputs
                $number1 = $_GET['number1'];  
                $number2 = $_GET['number2']; 
                $calc = $_GET['button'];
                //$result = $_GET['result'];

                //Calculate inputs
                if (is_numeric($number1) && is_numeric($number2)){

                    if($calc == '+') {
                        $result = $number1 + $number2;
                    }
                    else if($calc == '-') {
                        $result = $number1 - $number2;
                    }
                    else if($calc == '*') {
                        $result = $number1 * $number2;
                    }
                    else if($calc == '/') {
                        $result = $number1 / $number2;
                    } }}
                    
        echo "<h3>Result: <b>$result</b></h3>";  

        }
                     
        ?>



<style>

.row {
    margin-left: 10px;
    margin-top: 10px;
  }

.form-label {
    font-family: Cyreal;
    font-size: 20px;
    font-weight: 600;
    color: black;
  }

.formbtn {
    font-family: Cyreal;
    font-size: 20px;
    background-color: rgb(49, 128, 124);
    color: white;
    border-radius: 10px;
    margin: 10px;
    padding: 15px;
    text-decoration:none;
    height: 40px;
    width: 40px;
} 
 

 </style> 
 
  
