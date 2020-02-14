package com.proyecto.wallapop.repositories;


import org.springframework.data.repository.CrudRepository;

import com.proyecto.wallapop.entities.Usuario;

public interface IUsuario extends CrudRepository<Usuario, Integer> {

}