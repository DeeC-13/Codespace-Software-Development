 <!doctype html>
<html lang="en">
    <body>
        <h2> Age Challenge</h2>
            <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="get">
        
                <div class = container>
                    <div class= "row"> 
                        <label for="number">Enter your age: </label>
                        <input type="number" name="age">
                    </div>
                <div class= "row">
                    <button type="submit" name = "submit">Submit</button>
                </div>   

                <div class= "row">
                    <p readonly ="readonly" value = "<?php echo $age ?>" ></p> 
                </div>  
                   
            </div> 

        </form>
        <br>
 
 
<?php       
        if ($_SERVER["REQUEST_METHOD"] == "GET") {

            if (isset($_GET['submit'])) {
                $age = $_GET['age'];                    
                    
                if (is_numeric($age)) {              

                    if ($age < 13) {
                        echo "You are a child";
                    } else if ($age >= 13 && $age <= 17) {
                        echo "You are a teenager";
                    } else if ($age >= 18 && $age <= 64) {
                        echo "You are an adult";
                    } else {
                        echo "You are a senior citizen";
                    }
                }
                        
            }
        }    
        
?>