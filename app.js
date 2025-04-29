function mostrarRegistro() {
    document.getElementById('loginForm').classList.add('d-none');
    document.getElementById('registerForm').classList.remove('d-none');
}

function mostrarLogin() {
    document.getElementById('registerForm').classList.add('d-none');
    document.getElementById('loginForm').classList.remove('d-none');
}

function registrarUsuario() {
    const usuario = document.getElementById('usuarioRegistro').value.trim();
    const correo = document.getElementById('correoRegistro').value.trim();
    const contrasena = document.getElementById('contrasenaRegistro').value.trim();
    const confirmarContrasena = document.getElementById('confirmarContrasenaRegistro').value.trim();

    if (usuario && correo && contrasena && confirmarContrasena) {
        if (contrasena !== confirmarContrasena) {
            alert('Las contraseñas no coinciden.');
            return;
        }

        const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
        usuarios.push({ usuario, correo, contrasena });
        localStorage.setItem('usuarios', JSON.stringify(usuarios));

        alert('Usuario registrado correctamente');
        window.location.href = 'inicio.html';
    } else {
        alert('Por favor llena todos los campos');
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const tabla = document.getElementById('tablaUsuarios');
    if (tabla) {
        const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

        usuarios.forEach(usuario => {
            const fila = document.createElement('tr');
            fila.innerHTML = `
                <td>${usuario.usuario}</td>
                <td>${usuario.contrasena}</td>
            `;
            tabla.appendChild(fila);
        });
    }
});
