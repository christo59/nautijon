package com.yoka.components.dto;

import org.springframework.data.neo4j.annotation.QueryResult;

@QueryResult
public class Musique extends Theme {

    private String interprete;
    private String album;
    private String duree;
    private String producteur;

    public Musique(String imagePath, String titre, String langue, String dateSortie, String genre, Double note, String interprete, String album, String duree, String producteur) {
        super(imagePath, titre, langue, dateSortie, genre, note);
        this.interprete = interprete;
        this.album = album;
        this.duree = duree;
        this.producteur = producteur;
    }

    public String getInterprete() {
        return interprete;
    }

    public void setInterprete(String interprete) {
        this.interprete = interprete;
    }

    public String getAlbum() {
        return album;
    }

    public void setAlbum(String album) {
        this.album = album;
    }

    public String getDuree() {
        return duree;
    }

    public void setDuree(String duree) {
        this.duree = duree;
    }

    public String getProducteur() {
        return producteur;
    }

    public void setProducteur(String producteur) {
        this.producteur = producteur;
    }
}
