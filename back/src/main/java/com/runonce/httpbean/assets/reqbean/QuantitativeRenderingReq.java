package com.runonce.httpbean.assets.reqbean;



import com.runonce.model.eventversiontwo.QuantitativeRendering;
import lombok.Data;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;

@Data
public class QuantitativeRenderingReq {
    @Valid
    @NotNull(message = "对象不能为空！")
    private QuantitativeRendering quantitativeRendering;

    /**
     * 版本号
     */
    @Valid
    @NotNull(message = "版本号不能为空")
    private Integer version;
}