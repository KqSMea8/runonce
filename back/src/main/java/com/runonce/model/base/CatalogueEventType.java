package com.runonce.model.base;
import java.io.Serializable;
import lombok.Data;
import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.Table;

/**
*  
*
*  Created by xuxueli on '2018-12-10 14:57:46'.
*/
@Data
@Table(name="catalogue_event_type")
public class CatalogueEventType implements Serializable {
    private static final long serialVersionUID = 42L;

    /**
    * 
    */
    @Id
    @Column(name = "id")
    private String id;

    /**
    * 编号
    */
    @Column(name = "code")
    private int code;

    /**
    * 名称
    */
    @Column(name = "name")
    private String name;

    /**
    * 备注
    */
    @Column(name = "remarks")
    private String remarks;


}