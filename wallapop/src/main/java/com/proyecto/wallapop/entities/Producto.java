package com.proyecto.wallapop.entities;

import java.math.BigDecimal;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;


import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Producto {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue
	private int id;
	
	private String nombre;
	
	private String descripcion;
	
	private BigDecimal precio;
	
	 @ManyToOne(fetch = FetchType.LAZY, optional = false)
	 @JsonIgnore
	 private Usuario usuario;

}
