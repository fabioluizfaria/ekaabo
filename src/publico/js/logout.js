function logout() {
    document.cookie = "token_rma=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    window.location.href = "/acessarlogin";
}