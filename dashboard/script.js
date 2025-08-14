 // CREATE
    document.getElementById('createForm').onsubmit = async function(e) {
      e.preventDefault();
      const name = document.getElementById('createName').value;
      const author = document.getElementById('createAuthor').value;
      const res = await fetch('/books', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, author })
      });
      document.getElementById('createResult').innerText = await res.text();
    };

    // READ ALL
    async function getAllBooks() {
      const res = await fetch('/books');
      document.getElementById('booksList').innerText = await res.text();
    }

    // READ ONE
    async function getBookById() {
      const id = document.getElementById('getId').value;
      const res = await fetch('/books/' + id);
      document.getElementById('bookById').innerText = await res.text();
    }

    // UPDATE
    document.getElementById('updateForm').onsubmit = async function(e) {
      e.preventDefault();
      const id = document.getElementById('updateId').value;
      const name = document.getElementById('updateName').value;
      const author = document.getElementById('updateAuthor').value;
      const body = {};
      if (name) body.name = name;
      if (author) body.author = author;
      const res = await fetch('/books/' + id, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });
      document.getElementById('updateResult').innerText = await res.text();
    };

    // DELETE
    async function deleteBook() {
      const id = document.getElementById('deleteId').value;
      const res = await fetch('/books/' + id, { method: 'DELETE' });
      document.getElementById('deleteResult').innerText = await res.text();
    }