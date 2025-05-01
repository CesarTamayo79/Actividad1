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
        window.location.href = 'index.html';
    } else {
        alert('Por favor llena todos los campos');
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const tabla = document.getElementById('tablaUsuarios');
    if (tabla) {
        const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

        usuarios.forEach((usuario) => {
            const fila = document.createElement('tr');
            fila.innerHTML = `
                                <td>${usuario.usuario}</td>
                <td>${usuario.correo}</td>
                <td>${usuario.contrasena}</td>
                <td>
                    <a href="#editarUsuario" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
                    <a href="#eliminarUsuario" class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
                </td>
            `;
            tabla.appendChild(fila);
        });
    }
});


document.addEventListener('DOMContentLoaded', function () {
    const formEliminar = document.querySelector('#eliminarUsuario form');
    if (formEliminar) {
        formEliminar.addEventListener('submit', function (e) {
            e.preventDefault();
            const indice = document.getElementById('indiceUsuario').value;
            const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
            usuarios.splice(indice, 1);
            localStorage.setItem('usuarios', JSON.stringify(usuarios));
            location.reload();
        });
    }
});


