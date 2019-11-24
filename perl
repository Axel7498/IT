DAY 4 – Perl

Q1) Write a Perl script to implement associative array.

A)
use strict; 
use warnings; 

sub main
{
    # Declare and initialize a hash.
    # In this example, both the keys
    # and values are strings. But
    # either or both could be numbers.
    my %hobbies = (
        'Roger' => 'hang gliding',
        'Penny' => 'diving',
        'Peter' => 'bus surfing',
        'Richard' => 'collects spores and fungi',
        'Clare' => 'competitive drinking',
        'Lisa' => 'pole vaulting',
    );
    
    # Add another value to the hash.
    $hobbies{'John'} = 'running';
    
    # Delete a key-value pair from the hash.
    delete $hobbies{'Peter'};
    
    # Access a value.
    print "Richard's hobby: ", $hobbies{'Richard'}, "\n";
    
    # Let's print (display) the entire hash, just
    # for fun. Note that we use a backslash  on the 
    # hash's name. This gives us a reference to 
    # the hash, which we pass to Dumper() to
    # format the hash as a string for display.
    use Data::Dumper;
    print Dumper(%hobbies);
}

main();




Q2) Write a program in Perl to use Regular Expression and if a string contains any vowel, count the total number of vowels.

A)
$string = "asdjopqiweuralsk;djfouwerx,.mncvqopiwuesdfoqiweuraapoutre";
$count = 0;
while ($string =~ m/[aeiou]/g) {
  $count=$count+1;
}
print "There are ".$count." lower case vowels in the string\n";

Q3) Write a program in Perl to use Regular Expression and if a string starts with MCA and end with bw, print 1 else 0.

A)
$string = "MCAisshdkj.anfkshbw";
$flag=0;
$string =~ m/[^MCA|bw$]/g
print $flag;
