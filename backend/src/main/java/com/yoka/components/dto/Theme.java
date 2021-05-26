package com.yoka.components.dto;

import org.springframework.data.neo4j.annotation.QueryResult;

@QueryResult
public class Theme {

    private String imagePath;
    private String titre;
    private String langue;
    private String dateSortie;
    private String genre;
    private Double note;

    public Theme(String imagePath, String titre, String langue, String dateSortie, String genre, Double note) {
        this.imagePath = imagePath;
        this.titre = titre;
        this.langue = langue;
        this.dateSortie = dateSortie;
        this.genre = genre;
        this.note = note;
    }

    public String getImagePath() {
        return imagePath;
    }

    public void setImagePath(String imagePath) {
        this.imagePath = imagePath;
    }

    public String getTitre() {
        return titre;
    }

    public void setTitre(String titre) {
        this.titre = titre;
    }

    public String getLangue() {
        return langue;
    }

    public void setLangue(String langue) {
        this.langue = langue;
    }

    public String getDateSortie() {
        return dateSortie;
    }

    public void setDateSortie(String dateSortie) {
        this.dateSortie = dateSortie;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public Double getNote() {
        return note;
    }

    public void setNote(Double note) {
        this.note = note;
    }
}
