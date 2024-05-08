import axios from "axios";
import { load } from "cheerio";
import xlsx from "xlsx";


(async () => {
    const headers = {
        "content-type": "text/html",
    }
    
    const url = 'https://www.amazon.in/s?k=laptops&crid=3CF5QAC5Y8OD2&sprefix=laptops%2Caps%2C243&ref=nb_sb_noss_1';

    try{
        const response = await axios.get(url, {headers,});
    // console.log(response.data);
    const html = response.data;

    const $ = load(html);
    const data = []; //array to store the data
    data.push(['Name', 'Price', 'Rating', 'No of reviews']);

    const laptops = $('[data-component-type="s-search-result"]')

    // console.log(laptops.length);

    laptops.each((_, item)=>{
        const container = $(item);

        const name = container.find('h2').text();
        
        const price = container.find('.a-price-whole').text();
        const rating = container.find('.a-icon-alt').text().slice(0,3);
        // console.log(rating);
        const NoOfRating = container.find('[class="a-size-base s-underline-text"]').text();
        // console.log(`name:${name}, price:${price}, rating:${rating}, Number Of Rating:${NoOfRating}`);
        
        data.push([name, price, rating, NoOfRating])

        
    })
    // Writing in Excel format

    const workbook = xlsx.utils.book_new();

    const sheet = xlsx.utils.aoa_to_sheet(data);
    xlsx.utils.book_append_sheet(workbook, sheet, 'Scraped Data');
    xlsx.writeFile(workbook, 'amazon_workbook.xlsx');
    console.log('Workbook created successfully')
    }

    


    catch(err){
        console.log(err);
    }



})();

