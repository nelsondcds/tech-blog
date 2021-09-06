async function editFormHandler(event) {
    event.preventDefault();

    const new_title = document.querySelector('input[name="post-title"]').value.trim();
  
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];
  
    if (new_title) {
        const response = await fetch(`/api/posts/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                title: new_title
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
      
        if (response.ok) {
            document.location.replace('/dashboard/');
        } else {
            alert(response.statusText);
        }
    }
}
  
document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);
