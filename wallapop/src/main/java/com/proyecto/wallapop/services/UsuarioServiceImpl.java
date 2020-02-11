package com.proyecto.wallapop.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


import com.proyecto.wallapop.entities.Usuario;
import com.proyecto.wallapop.repositories.IUsuario;

@Service
public class UsuarioServiceImpl implements IUsuarioService {

	@Autowired
	private IUsuario usuarioRepository;

	@Override
	public List<Usuario> findAll() {
		// TODO Auto-generated method stub
		return (List<Usuario>) usuarioRepository.findAll();
	}

	@Override
	public Usuario save(Usuario usuario) {

		return usuarioRepository.save(usuario);
	}

	@Override
	public Usuario findById(Integer id) {
		
		return usuarioRepository.findById(id).orElse(null);
	}

	@Override
	public void delete(Integer id) {
		usuarioRepository.deleteById(id);;
		
	}


	
	
}
