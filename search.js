// JavaScript code for search functionality

$(document).ready(function () {
    $('form').submit(function (event) {
        event.preventDefault(); // prevent default form submission behavior
        $('.searchResults').empty(); // clear previous results

        var query = $('input[name="search"]').val(); // get user search query
        const $matches = $('.products').find(':contains(' + query + ')'); // find all elements that match the query

        if ($matches.length) { // if matches are found
            $matches.each(function () { // loop through each match and display
                $('.searchResults').append('<li class="product" style="list-style-type: none" align="center">' + $(this).html() + '</li>');
                if ($matches.includes(query)) {
                    return;
                }
            });
        }
        else { // if no matches are found
            $('.searchResults').append('<li>No matching results found.</li>');
        }
    });
});
