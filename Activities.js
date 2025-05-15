 // Get DOM elements
        const waiveButton = document.getElementById('waive');
        const paymentButton = document.getElementById('payment');
        const closeButton = document.getElementById('close');
        const modalContainer = document.getElementById('modalContainer');
        const detailsButtons = document.querySelectorAll('.details');
        const homeButton = document.getElementById('home');
        const pendingButton = document.getElementById('pending');
        const homeIcon = document.getElementById('home-icon');
        const approveBtn = document.getElementById('approvedBtn');
        const summaryModal = document.getElementById('summaryModal');
        const closeSummaryBtn = document.getElementById('closeSummary');
        const declineButton = document.getElementById('declineBtn');
        

        
        
        // Function to update student details in modal
        function updateModalDetails(rowElement) {
          const name = rowElement.querySelector('th:first-child').textContent;
          const program = rowElement.querySelector('th:nth-child(2)').textContent;
          const term = rowElement.querySelector('th:nth-child(3)').textContent;
          const reason = rowElement.querySelector('th:nth-child(4)').textContent;
          


          // Update modal content with row data
          document.getElementById('studentname').textContent = name;
          document.getElementById('studReason').textContent = reason;
          
          // Set the first course row
          const courseTableRows = document.getElementById('courseTableBody').rows;
          if (courseTableRows.length > 0) {
            courseTableRows[0].cells[0].textContent = course;
          }
        }
        
        // Add event listeners to all detail buttons
        detailsButtons.forEach(button => {
          button.addEventListener('click', function() {
            const row = this.closest('tr');
            updateModalDetails(row);
            modalContainer.style.display = 'flex';
            document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
          });
        });

        // Set initial state (Waive button active)
        waiveButton.style.backgroundColor = '#0159a6';
        waiveButton.style.color = 'white';
        
        // Waive button click
        waiveButton.addEventListener('click', () => {
          waiveButton.style.backgroundColor = '#0159a6';
          waiveButton.style.color = 'white';
          paymentButton.style.backgroundColor = 'white';
          paymentButton.style.color = '#0159a6';
          paymentButton.style.border = '2px solid #f6d047';
        });

        // Payment button click
        paymentButton.addEventListener('click', () => {
          paymentButton.style.backgroundColor = '#0159a6';
          paymentButton.style.color = 'white';
          paymentButton.style.border = 'none';
          waiveButton.style.backgroundColor = 'white';
          waiveButton.style.color = '#0159a6';
          waiveButton.style.border = '2px solid #f6d047';
        });
        
        // Close button click
        closeButton.addEventListener('click', () => {
          modalContainer.style.display = 'none';
          document.body.style.overflow = 'auto'; // Re-enable scrolling
        });
        
        // Close modal when clicking outside
        modalContainer.addEventListener('click', (event) => {
          if (event.target === modalContainer) {
            modalContainer.style.display = 'none';
            document.body.style.overflow = 'auto'; // Re-enable scrolling
          }
        });
        
        // Handle keyboard events (Escape key to close modal)
        document.addEventListener('keydown', (event) => {
          if (event.key === 'Escape' && modalContainer.style.display === 'flex') {
            modalContainer.style.display = 'none';
            document.body.style.overflow = 'auto'; // Re-enable scrolling
          }
        });
       
        homeButton.addEventListener('click', () => {
          window.location.href = 'homepage.html';

        });
        pendingButton.addEventListener('click', () => {
          window.location.href = 'PendingRequestPage.html';
          homeButton.style.backgroundColor = 'white';
          homeButton.style.color = '#0159a6';
          homeButton.style.border = '2px solid #f6d047';
          homeButton.src = './assets/blue-home.png';
          pendingButton.style.backgroundColor = '#0159a6';
          pendingButton.style.color = 'white';
          pendingButton.style.border = 'none';
        });

        
        // will change the color of the status when clicking the approve button
        function updateSummaryModal(isApproved) {
          summaryModal.style.display = 'flex';
          
          // Copy student info from main modal to summary modal
          const mainStudentName = document.getElementById('studentname').textContent;
          const mainStudentNum = document.getElementById('studNum').textContent;
          document.getElementById('summaryStudentName').textContent = mainStudentName;
          document.getElementById('summaryStudNum').textContent = mainStudentNum;
          const statusText = document.getElementById('statusText');
          const backColor = document.getElementById('statusBackColor');
            //lalabas dito sa action na for waive sya
            waiveButton.addEventListener('click', () =>{
            document.getElementById('actionGiven').textContent = waiveButton.textContent;
          });
           //lalabas dito sa action na for payment sya
          paymentButton.addEventListener('click', () =>{
            document.getElementById('actionGiven').textContent = paymentButton.textContent;
          });
        
          
          if (isApproved) {
            
            statusText.textContent = 'Approved';
            statusText.style.color = '#03C820';
            backColor.style.backgroundColor = '#C4FFCD';
            backColor.style.border = '2px solid #03C820';
          } else {
            statusText.textContent = 'Decline'; 
            statusText.style.color = '#FF0000';
            backColor.style.backgroundColor = '#FFB9B9';
            backColor.style.border = '2px solid #FF0000';
            document.getElementById('actionGiven').textContent = "";
          }
          
        

        
        }

        approveBtn.addEventListener('click', () => {
          updateSummaryModal(true);
        });

        declineButton.addEventListener('click', () => {
          updateSummaryModal(false);
        });

        closeSummaryBtn.addEventListener('click', () => {
            summaryModal.style.display = 'none';
        });

        summaryModal.addEventListener('click', (event) => {
            if (event.target === summaryModal) {
              summaryModal.style.display = 'none';
            }
        });
   




       
