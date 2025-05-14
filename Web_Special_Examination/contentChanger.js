 document.getElementById('open').onclick = function() {
            document.getElementById('modal-container').style.opacity = '1';
        };

        document.getElementById('close').onclick = function() {
            document.getElementById('modal-container').style.opacity = '0';
        };

        // Optional: Close modal when clicking outside of it
        window.onclick = function(event) {
            const modal = document.getElementById('modal-container');
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        };