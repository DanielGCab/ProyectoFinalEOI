package com.proyecto.wallapop.entities;

import java.math.BigDecimal;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Usuario {
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue
	private int id;
	
	private String nombre;
	
	private String apellidos;
	
	private String nick;
	
	private String email;
	
	private String telefono;
	
	
	
}
