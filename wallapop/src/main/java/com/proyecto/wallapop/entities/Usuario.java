package com.proyecto.wallapop.entities;

import java.math.BigDecimal;
import java.util.Date;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Usuario {
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue
	private int id;
	
	@NotEmpty(message="El nombre no puede estar vacío")
	@Size(min=3, max=15, message="el tamaño tiene que estar entre 3 y 15")
	@Column(nullable = false)
	private String nombre;
	
	@NotEmpty(message="El apellido no puede estar vacio")
	@Column(nullable = false)
	private String apellidos;
	
	@NotEmpty(message="El Nick no puede estar vacio")
	@Column(nullable = false)
	private String nick;
	
	@NotEmpty(message="El email no puede estar vacio")
	@Email(message="no es una dirección de correo bien formada")
	@Column(nullable = false)
	private String email;
	
	@Column
	private String telefono;
	
    @OneToMany(mappedBy="usuario")
    @JsonIgnore
    private Set<Producto> producto;
	
	

	public Usuario() {
		super();
	}

	public Usuario(
			@NotEmpty(message = "El nombre no puede estar vacío") @Size(min = 3, max = 15, message = "el tamaño tiene que estar entre 3 y 15") String nombre,
			@NotEmpty(message = "El apellido no puede estar vacio") String apellidos,
			@NotEmpty(message = "El Nick no puede estar vacio") String nick,
			@NotEmpty(message = "El email no puede estar vacio") @Email(message = "no es una dirección de correo bien formada") String email,
			String telefono) {
		super();
		this.nombre = nombre;
		this.apellidos = apellidos;
		this.nick = nick;
		this.email = email;
		this.telefono = telefono;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getApellidos() {
		return apellidos;
	}

	public void setApellidos(String apellidos) {
		this.apellidos = apellidos;
	}

	public String getNick() {
		return nick;
	}

	public void setNick(String nick) {
		this.nick = nick;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getTelefono() {
		return telefono;
	}

	public void setTelefono(String telefono) {
		this.telefono = telefono;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	
	
	
	
	
	
	
}
