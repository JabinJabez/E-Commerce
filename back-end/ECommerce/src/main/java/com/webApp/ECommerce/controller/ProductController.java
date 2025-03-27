package com.webApp.ECommerce.controller;

import com.webApp.ECommerce.model.Product;
import com.webApp.ECommerce.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/products")
@CrossOrigin(origins = "http://localhost:5173")
public class ProductController {
    @Autowired
    ProductService productService;

    @GetMapping
    public ResponseEntity<List<Product>> getAllProducts() {
        return new ResponseEntity<>(productService.getAllProducts(), HttpStatus.OK);
    }

    @GetMapping("/{prodId}")
    public ResponseEntity<Product> getProduct(@PathVariable int prodId) {
        return new ResponseEntity<>(productService.getProduct(prodId), HttpStatus.OK);
    }

    @PostMapping("/add-product")
    public ResponseEntity<Product> addProduct(@RequestBody Product product) {
        return new ResponseEntity<>(productService.addProduct(product), HttpStatus.CREATED);
    }

    @PutMapping("/{prodId}")
    public ResponseEntity<Product> updateProduct(@PathVariable int prodId, @RequestBody Product product) {
        return new ResponseEntity<>(productService.updateProduct(prodId, product), HttpStatus.OK);
    }

    @DeleteMapping("/{prodId}")
    public ResponseEntity<String> deleteProduct(@PathVariable int prodId) {
        return new ResponseEntity<>(productService.deleteProduct(prodId), HttpStatus.NO_CONTENT);
    }
}
