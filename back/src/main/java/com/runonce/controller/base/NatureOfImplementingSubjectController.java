package com.runonce.controller.base;

import java.util.List;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.runonce.ReturnCode;

import com.runonce.model.base.NatureOfImplementingSubject;
import  com.runonce.service.base.NatureOfImplementingSubjectService;

/**
* 
*
* Created by xuxueli on '2018-12-10 14:57:47'.
*/

@RestController
@RequestMapping("natureOfImplementingSubject")
@Api(description = "实施主体性质 ")
public class  NatureOfImplementingSubjectController {

    @Autowired
    private NatureOfImplementingSubjectService natureOfImplementingSubjectService;

    @PostMapping("add")
    @ApiOperation(value = "添加 ")
    public ReturnCode add(@RequestBody NatureOfImplementingSubject  natureOfImplementingSubject) {
        natureOfImplementingSubjectService.save( natureOfImplementingSubject);
       return new ReturnCode.Builder().msg("添加成功").success().object(natureOfImplementingSubject).build();
    }

    @DeleteMapping("delete")
    @ApiOperation(value = "删除 ")
    public ReturnCode delete(@RequestParam String id) {
	    natureOfImplementingSubjectService.deleteById(id);
	  	return new ReturnCode.Builder().msg("删除成功").success().build();
    }

 	@PutMapping("update")
    @ApiOperation(value = "更改")
    public ReturnCode update(@RequestBody NatureOfImplementingSubject  natureOfImplementingSubject) {
	    natureOfImplementingSubjectService.update( natureOfImplementingSubject);
	 	return new ReturnCode.Builder().msg("更新成功").object(natureOfImplementingSubject).success().build();
    }

   @GetMapping("detail")
   @ApiOperation(value = "查询 ")
    public ReturnCode detail(@RequestParam String id) {
        NatureOfImplementingSubject natureOfImplementingSubject = natureOfImplementingSubjectService.findById(id);
        return new ReturnCode.Builder().msg("查询成功").object(natureOfImplementingSubject).success().build();
    }

    @PostMapping("list")
    @ApiOperation(value = "查询所有 ")
    public ReturnCode list(@RequestParam(defaultValue = "0") Integer page, @RequestParam(defaultValue = "0") Integer size) {
        PageHelper.startPage(page, size);
        List<NatureOfImplementingSubject> list = natureOfImplementingSubjectService.findAll();
        PageInfo pageInfo = new PageInfo(list);
       return new ReturnCode.Builder().msg("查询成功").object(pageInfo).success().build();
    }

}