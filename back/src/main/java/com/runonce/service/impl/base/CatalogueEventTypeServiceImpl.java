package com.runonce.service.impl.base;
import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import com.runonce.service.base.CatalogueEventTypeService;
import com.runonce.dao.base.CatalogueEventTypeDao;
import com.runonce.service.AbstractService;
import  com.runonce.model.base.CatalogueEventType;

/**
* 
*
* Created by xuxueli on '2018-12-10 14:57:46'.
*/
@Service
public class CatalogueEventTypeServiceImpl extends AbstractService<CatalogueEventType> implements CatalogueEventTypeService  {

	@Resource
	private CatalogueEventTypeDao catalogueEventTypeDao;

	
}
