    document.addEventListener('DOMContentLoaded', function() {
      const submitButton = document.getElementsByName('subo')[0]; 
      submitButton.addEventListener('click', function() {
        const wp = {
          mail: document.getElementsByName('Mail')[0].value,
          un: document.getElementsByName('userName')[0].value,
          ps: document.getElementsByName('pass')[0].value,
        };
        fetch('/ur', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ user_object: wp })
        }).then(res => {
          if (res.ok) {
            console.log('Logged in Successfully');
          } else {
            throw new Error('Failed to register');
          }
        })
        .catch(err => {
          console.warn(err);
        });
      });
    });