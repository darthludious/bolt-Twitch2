document.getElementById('startBot').addEventListener('click', function() {
      const proxy = document.getElementById('proxy').value;
      const twitchUsername = document.getElementById('twitchUsername').value;
      const viewerCount = document.getElementById('viewerCount').value;

      fetch('/start_bot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ proxy, twitch_username: twitchUsername, viewer_count: viewerCount })
      })
      .then(response => response.json())
      .then(data => {
        alert(data.message);
      })
      .catch(error => {
        console.error('Error starting bot:', error);
      });
    });

    // Fetch announcement
    fetch('https://pastebin.com/raw/1EwXmhbY')
      .then(response => response.text())
      .then(data => {
        document.getElementById('announcement').innerText = data;
      })
      .catch(error => {
        console.error('Error fetching announcement:', error);
      });
