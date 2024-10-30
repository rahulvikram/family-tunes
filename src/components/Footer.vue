<script>
export default {
    data() { // defines this component's reactive data
        // dynamically get the current year
        return {
            currentYear: new Date().getFullYear()
        };
    }   
};
</script>

<template>
    <footer class="footer">
        <p>&copy; {{ currentYear }} Family Tunes</p>
        <div class="footer-links">
            <a href="https://linkedin.com/in/rahul-vikram/" target="_blank" class="footer-link">LinkedIn</a>
            <a href="https://github.com/rahulvikram/" target="_blank" class="footer-link">GitHub</a>
        </div>
    </footer>
</template>

<style scoped>
    .footer {
        background-color: #D496A7;
        padding: 20px;
        text-align: center;
    }

    .footer-links {
        margin-top: 10px;
    }

    .footer-links a {
        margin-top: 5px;
        color: #4c4757;
    }

    .footer-links a:hover {
        text-decoration: underline;
    }
</style>