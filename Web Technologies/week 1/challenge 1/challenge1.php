
<?php
// Challenge 1 Week 1
// Question 1 - use variables to print out the width, height and area of a rectangle

    $width = 10;
    $height = 5;
    $area = $width * $height;

    echo("The rectangle has a width of $width meters, a height of  $height meters, and an area of $area square meters.
<br>")

?>

<?php
// Question 2 - Using two numbers to and, subtract, multiply, divide and concatenate them

    $num1 = 10;
    $num2 = 5;
    $add = $num1 + $num2;
    $subtract = $num1 - $num2;
    $multiply = $num1 * $num2;
    $divide = $num1 / $num2;
    $concatenated = $num1 . " " . $num2;

    echo("Addition of $num1 and $num2 is: $add <br>"),
        ("Subtraction of $num1 and $num2 is: $subtract <br>"),
        ("Multiplication of $num1 and $num2 is: $multiply <br>"),
        ("Division of $num1 and $num2 is: $divide <br>"),
        ("Concatenation of $num1 and $num2 is: $concatenated <br>")

?>

<?php 
// Question 3 - Use variables to store the user's age, days, hours, and minutes they have been alive
    
    $age = 25;
    $days = $age * 365;
    $hours = $days * 24;
    $minutes = $hours * 60;
    
    echo("Welcome to the Age Calculator! <br>"),

    ("Please enter your age <br>"),

    ("Your age is: $age <br>"),

    ("You have been alive for: <br>"),
    ("days: $days <br>"),
    ("hours: $hours <br>"),
    ("minutes: $minutes <br>")

?>

<?php
// Question 4 - Use an array to show days of the week

    $weekdays = array(
        "Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday"
    );

    foreach($weekdays as $value)
    echo("The days of the week are: $value <br>")
?>

<?php
// Question 5 - Use an array to show the climate in Edinburgh

    
$climate = array (
        array("Month","", "",  "High","","", "Low"),
        array("Jan - Feb","","", 7,('°C'),"", 1,('°C')),
        array("Jul - Aug","","", 19,('°C'),"", 11,('°C'))
    );

    echo("Average temperature in Edinburgh <br>"),

    $out = "<table>";
    foreach($climate as $row) {
        $out .= "<tr>";
    foreach ($row as $cell) {
        $out .= "<td>" . $cell . "</td>";
    }
    $out .= "</tr>";
}
    $out .= "</table>";


echo $out; 
?>

<?php
// Question 6 - Use an array to display student results

    
$results = array (
        array("Name", "", "", "Physics", "", "", "English", "", "", "Maths"),
        array("Aaron",  "", "", 74,('%'),  "", "", 69,('%'),  "", "", 70,('%')),
        array("Jamie",  "", "", 64,('%'),  "", "", 79,('%'),  "", "", 69,('%')),
        array("Harry",  "", "", 55,('%'),  "", "", 52,('%'),  "", "", 57,('%'))
    );

    $out = "<table>";
    foreach($results as $row) {
        $out .= "<tr>";
    foreach ($row as $cell) {
        $out .= "<td>" . $cell . "</td>";
    }
    $out .= "</tr>";
}
    $out .= "</table>";


echo $out; 

print "Student Results <br>";
print "Aarons Physics result is: ". $results [1] [3]. "% <br>";
print "Jamie's English result is: ". $results [2] [7]. "% <br>";
print "Harry's Math result is: ". $results [3] [11]. "% <br>";

?>