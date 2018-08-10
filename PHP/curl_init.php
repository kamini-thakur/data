
<?php

//echo phpinfo();
// create a new cURL resource
$ch = curl_init();

// set URL and other appropriate options
curl_setopt($ch, CURLOPT_URL, "http://stackoverflow.com/questions/3062324/what-is-curl-in-php");
curl_setopt($ch, CURLOPT_HEADER, 0);

// grab URL and pass it to the browser
$output=curl_exec($ch);

// close cURL resource, and free up system resources
curl_close($ch);


/*
$start = strpos($output, '<h2 id="books-last1">Top 100 EBooks yesterday</h2>');
$end = strpos($output, '<p>', $start);
$length = $end-$start;
$output = substr($output, $start, $length);
print_r($output);
*/



/*
$url = "https://www.google.co.in/?gfe_rd=cr&ei=yRmbV9LcCKvT8gez7pqwCw&gws_rd=ssl";
$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
echo curl_exec($ch);
$curl_scraped_page = curl_exec($ch);
curl_close($ch);
//echo $curl_scraped_page;
*/

/*
$curl = curl_init('http://testing-ground.scraping.pro/textlist');
curl_setopt($curl, CURLOPT_RETURNTRANSFER, TRUE);
 
echo $page = curl_exec($curl);
 
if(curl_errno($curl)) // check for execution errors
{
	echo 'Scraper error: ' . curl_error($curl);
	exit;
}

curl_close($curl);
$regex = '/<div id="case_textlist">(.*?)<\/div>/s';
if ( preg_match($regex, $page, $list) )
    echo $list[0];
else 
    print "Not found"; 
*/

/*
 $scraped_page = curl("http://stackoverflow.com/questions/3062324/what-is-curl-in-php");    // Downloading IMDB home page to variable $scraped_page
 $scraped_data = scrape_between($scraped_page, "<div>", "</>");   // Scraping downloaded dara in $scraped_page for content between 
 echo $scraped_data; 
*/
/*
 $url = 'http://www.google.com';
 $output = file_get_contents($url);
 echo $output;
 */

?>

