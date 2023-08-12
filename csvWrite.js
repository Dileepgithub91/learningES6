
const fs = require("fs");
import("node-fetch")
  .then(fetchModule => {
    const fetch = fetchModule.default; // Get the fetch function from the module

    // Rest of your code remains the same
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(data => {
        let csvContent = "userId,id,title,body\n"; // Create CSV header

        data.forEach(post => {
          let userId = post.userId;
          let id = post.id;
          let title = post.title;
          let body = post.body;

          // Escape double quotes in title and body
          title = title.replace(/"/g, '""');
          body = body.replace(/"/g, '""');

          // Append data to CSV content
          csvContent += `"${userId}","${id}","${title}","${body}"\n`;
        });

        // Write CSV content to a file
        fs.writeFile("posts.csv", csvContent, "utf-8", err => {
          if (err) {
            console.error("Error writing CSV file:", err);
          } else {
            console.log("CSV file has been created: posts.csv");
          }
        });
      })
      .catch(error => {
        console.error("Error fetching or processing data:", error);
      });
  })
  .catch(error => {
    console.error("Error importing node-fetch:", error);
  });

