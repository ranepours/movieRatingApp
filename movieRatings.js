//BASIC TASKS: grab title and rating on submit; append remove button; all of that gets added to table body; aaand ofcourse the remove button needs to functon lol

//something to store the movie stuff
let movieHolder = [];

let deleting = 0;

$(() => {
    $('#new-entry').on('submit', (e) => {
        e.preventDefault();
        let $title = $('#title').val();
        let $rating = $('#rating').val();

        let inputs = {$title, $rating, deleting};
        const newHTML = toHTML(inputs);

        deleting++;
        movieHolder.push(inputs)

        $('#table-body').append(newHTML);
        $('#new-entry').trigger('reset');
    })

    //event delegation!!!!!!!!!!!!!!
    $('tbody').on('click', '.button', (e) => {
        let basura = movieHolder.findIndex((movie) =>
            movie.currentId === +$(e.target).data("deleteId"));
        movieHolder.splice(basura, 1);
        $(e.target).closest('tr').remove();
    })


})

//take movieStuff and turn into html
toHTML = (inputs) => {
    return `
        <tr>
            <td>${inputs.$title}</td>
            <td>${inputs.$rating}</td>
            <td>
                <button class="button" id="delete-button" data-delete-id=${inputs.deleting}> Delete </button>
            </td>
        </tr>
    `;
}
