CREATE DATABASE `domgames` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_bin */;
CREATE TABLE `acessorios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) COLLATE utf8_bin NOT NULL,
  `preco` decimal(10,0) NOT NULL,
  `estoque` mediumint(9) DEFAULT NULL,
  `promocao` tinyint(1) DEFAULT 0,
  `novo_usado` tinyint(1) NOT NULL DEFAULT 0,
  `descricao` longtext COLLATE utf8_bin DEFAULT NULL,
  `image` varchar(500) COLLATE utf8_bin DEFAULT NULL,
  `video_link` varchar(500) COLLATE utf8_bin DEFAULT NULL,
  `fabricantes_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_ACESSORIOS_FABRICANTE1_idx` (`fabricantes_id`),
  CONSTRAINT `fk_ACESSORIOS_FABRICANTE1` FOREIGN KEY (`fabricantes_id`) REFERENCES `fabricantes` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
CREATE TABLE `email_disparo` (
  `id` int(11) NOT NULL,
  `email_disparo` varchar(100) COLLATE utf8_bin NOT NULL,
  `usuarios_id` int(11) NOT NULL,
  `produtos_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_disparo_UNIQUE` (`email_disparo`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `fk_email_disparo_usuarios1_idx` (`usuarios_id`),
  KEY `fk_email_disparo_produtos1_idx` (`produtos_id`),
  CONSTRAINT `fk_email_disparo_produtos1` FOREIGN KEY (`produtos_id`) REFERENCES `produtos` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_email_disparo_usuarios1` FOREIGN KEY (`usuarios_id`) REFERENCES `usuarios` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='		';
CREATE TABLE `fabricantes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fabricante` varchar(45) COLLATE utf8_bin DEFAULT NULL,
  `plataforma` varchar(45) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
CREATE TABLE `formas_pgtos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cartao_1` varchar(18) COLLATE utf8_bin DEFAULT NULL,
  `cartao_2` varchar(18) COLLATE utf8_bin DEFAULT NULL,
  `cartao_3` varchar(18) COLLATE utf8_bin DEFAULT NULL,
  `banco_transferencia` varchar(18) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='		';
CREATE TABLE `generos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `genero` varchar(45) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
CREATE TABLE `giftcards` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) COLLATE utf8_bin NOT NULL,
  `preco` decimal(10,0) NOT NULL,
  `estoque` mediumint(9) DEFAULT NULL,
  `promocao` tinyint(1) DEFAULT 0,
  `chave` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `descricao` longtext COLLATE utf8_bin DEFAULT NULL,
  `image` varchar(500) COLLATE utf8_bin DEFAULT NULL,
  `video_link` varchar(500) COLLATE utf8_bin DEFAULT NULL,
  `fabricantes_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nome_UNIQUE` (`nome`),
  UNIQUE KEY `chave_UNIQUE` (`chave`),
  KEY `fk_GIFTCARDS_FABRICANTE1_idx` (`fabricantes_id`),
  CONSTRAINT `fk_GIFTCARDS_FABRICANTE1` FOREIGN KEY (`fabricantes_id`) REFERENCES `fabricantes` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
CREATE TABLE `historicos_compras` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nota_fiscal` varchar(300) COLLATE utf8_bin NOT NULL,
  `usuarios_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_historicos_compras_usuarios1_idx` (`usuarios_id`),
  CONSTRAINT `fk_historicos_compras_usuarios1` FOREIGN KEY (`usuarios_id`) REFERENCES `usuarios` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='		';
CREATE TABLE `historicos_vendas` (
  `historicos_compras_id` int(11) NOT NULL,
  `vendas_id` int(11) NOT NULL,
  PRIMARY KEY (`historicos_compras_id`,`vendas_id`),
  KEY `fk_historicos_compras_has_vendas_vendas1_idx` (`vendas_id`),
  KEY `fk_historicos_compras_has_vendas_historicos_compras1_idx` (`historicos_compras_id`),
  CONSTRAINT `fk_historicos_compras_has_vendas_historicos_compras1` FOREIGN KEY (`historicos_compras_id`) REFERENCES `historicos_compras` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_historicos_compras_has_vendas_vendas1` FOREIGN KEY (`vendas_id`) REFERENCES `vendas` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
CREATE TABLE `jogos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) COLLATE utf8_bin NOT NULL,
  `preco` decimal(10,0) NOT NULL,
  `estoque` mediumint(9) NOT NULL,
  `chave` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `midia_fisica` tinyint(1) DEFAULT 0,
  `promocao` tinyint(1) DEFAULT 0,
  `novo_usado` tinyint(1) NOT NULL DEFAULT 0,
  `genero` varchar(45) COLLATE utf8_bin DEFAULT NULL,
  `descricao` longtext COLLATE utf8_bin DEFAULT NULL,
  `image` varchar(500) COLLATE utf8_bin DEFAULT NULL,
  `video_link` varchar(500) COLLATE utf8_bin DEFAULT NULL,
  `fabricantes_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nome_UNIQUE` (`nome`),
  KEY `fk_jogos_fabricantes1_idx` (`fabricantes_id`),
  CONSTRAINT `fk_jogos_fabricantes1` FOREIGN KEY (`fabricantes_id`) REFERENCES `fabricantes` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
CREATE TABLE `plataformas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) COLLATE utf8_bin NOT NULL,
  `preco` decimal(10,2) NOT NULL,
  `estoque` mediumint(9) DEFAULT 0,
  `promocao` tinyint(1) DEFAULT 0,
  `novo_usado` tinyint(1) NOT NULL DEFAULT 0,
  `descricao` longtext COLLATE utf8_bin DEFAULT NULL,
  `image` varchar(500) COLLATE utf8_bin DEFAULT NULL,
  `video_link` varchar(500) COLLATE utf8_bin DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `fabricantes_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_plataformas_fabricantes1_idx` (`fabricantes_id`),
  CONSTRAINT `fk_plataformas_fabricantes1` FOREIGN KEY (`fabricantes_id`) REFERENCES `fabricantes` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
CREATE TABLE `produtos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `plataformas_id` int(11) DEFAULT 0,
  `acessorios_id` int(11) DEFAULT 0,
  `jogos_id` int(11) DEFAULT 0,
  `giftcards_id` int(11) DEFAULT 0,
  PRIMARY KEY (`id`),
  KEY `fk_produtos_plataformas1_idx` (`plataformas_id`),
  KEY `fk_produtos_acessorios1_idx` (`acessorios_id`),
  KEY `fk_produtos_jogos1_idx` (`jogos_id`),
  KEY `fk_produtos_giftcards1_idx` (`giftcards_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(15) COLLATE utf8_bin NOT NULL,
  `surname` varchar(20) COLLATE utf8_bin DEFAULT NULL,
  `gender` tinyint(3) DEFAULT 3,
  `cpf` varchar(11) COLLATE utf8_bin NOT NULL,
  `cel_whats` varchar(15) COLLATE utf8_bin NOT NULL,
  `tel` varchar(15) COLLATE utf8_bin NOT NULL,
  `email` varchar(30) COLLATE utf8_bin NOT NULL,
  `password` varchar(25) COLLATE utf8_bin NOT NULL,
  `cep_res` varchar(15) COLLATE utf8_bin NOT NULL,
  `endereco_res` varchar(45) COLLATE utf8_bin NOT NULL,
  `numero_res` varchar(10) COLLATE utf8_bin NOT NULL,
  `complemento_res` varchar(45) COLLATE utf8_bin DEFAULT NULL,
  `bairro_res` varchar(45) COLLATE utf8_bin NOT NULL,
  `referencia_res` varchar(45) COLLATE utf8_bin DEFAULT NULL,
  `cidade_res` varchar(45) COLLATE utf8_bin NOT NULL,
  `estado_res` varchar(20) COLLATE utf8_bin NOT NULL,
  `pais_res` varchar(30) COLLATE utf8_bin NOT NULL,
  `cep_ent` varchar(15) COLLATE utf8_bin NOT NULL,
  `endereco_ent` varchar(45) COLLATE utf8_bin NOT NULL,
  `numero_ent` varchar(10) COLLATE utf8_bin NOT NULL,
  `complemento_ent` varchar(45) COLLATE utf8_bin DEFAULT NULL,
  `bairro_ent` varchar(45) COLLATE utf8_bin NOT NULL,
  `referencia_ent` varchar(45) COLLATE utf8_bin DEFAULT NULL,
  `cidade_ent` varchar(45) COLLATE utf8_bin NOT NULL,
  `estado_ent` varchar(45) COLLATE utf8_bin NOT NULL,
  `pais_ent` varchar(45) COLLATE utf8_bin NOT NULL,
  `updatedAt` datetime DEFAULT current_timestamp(),
  `createdAt` datetime DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `cpf_UNIQUE` (`cpf`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=86 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
CREATE TABLE `vendas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `produtos_id` int(11) NOT NULL,
  `preco_total` decimal(10,0) DEFAULT NULL,
  `tipo_pgto` varchar(45) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_vendas_produtos1_idx` (`produtos_id`),
  CONSTRAINT `fk_vendas_produtos1` FOREIGN KEY (`produtos_id`) REFERENCES `produtos` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
