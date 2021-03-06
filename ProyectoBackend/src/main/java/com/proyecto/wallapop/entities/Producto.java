package com.proyecto.wallapop.entities;

import java.math.BigDecimal;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
public class Producto {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue
	private int id;
	
	@NotEmpty(message="El nombre no puede estar vacío")
	@Size(min=3, max=25, message="el tamaño tiene que estar entre 3 y 25")
	@Column(nullable = false)
	private String nombre;
	
	@NotEmpty(message="El campo descripcion no puede estar vacío")
	@Size(max=200, message="El tamaño máximo es de 200 caracteres")
	@Column(nullable = false)
	private String descripcion;
	

	@Column
	private String imagen;
	

	@Column(nullable = false)
	private Double precio;
	
	 @ManyToOne(fetch = FetchType.EAGER, optional = false)
	 private Usuario usuario;
	 
	 

	  

	public Producto() {
		super();
	}





	public Producto(int id,
			@NotEmpty(message = "El nombre no puede estar vacío") @Size(min = 3, max = 25, message = "el tamaño tiene que estar entre 3 y 25") String nombre,
			@NotEmpty(message = "El campo descripcion no puede estar vacío") @Size(max = 200, message = "El tamaño máximo es de 200 caracteres") String descripcion,
			String imagen, Double precio, Usuario usuario) {
		super();
		this.id = id;
		this.nombre = nombre;
		this.descripcion = descripcion;
		this.imagen = imagen;
		this.precio = precio;
		this.usuario = usuario;
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





	public String getDescripcion() {
		return descripcion;
	}





	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}





	public String getImagen() {
		return imagen;
	}





	public void setImagen(String imagen) {
		this.imagen = imagen;
	}





	public Double getPrecio() {
		return precio;
	}





	public void setPrecio(Double precio) {
		this.precio = precio;
	}





	public Usuario getUsuario() {
		return usuario;
	}





	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}





	public static long getSerialversionuid() {
		return serialVersionUID;
	}







	
	 
	 
	 

}
