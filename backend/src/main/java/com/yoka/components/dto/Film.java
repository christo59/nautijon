package com.yoka.components.dto;

public class Film extends Theme {

    private String realisateur;
    private String type;
    private String duree;
    private String theme;
    private String societeProduction;
    private String resume;

    public Film(String imagePath, String titre, String langue, String dateSortie, String genre, Double note, String realisateur, String type, String duree, String theme, String societeProduction, String resume) {
        super(imagePath, titre, langue, dateSortie, genre, note);
        this.realisateur = realisateur;
        this.type = type;
        this.duree = duree;
        this.theme = theme;
        this.societeProduction = societeProduction;
        this.resume = resume;
    }

    public String getRealisateur() {
        return realisateur;
    }

    public void setRealisateur(String realisateur) {
        this.realisateur = realisateur;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getDuree() {
        return duree;
    }

    public void setDuree(String duree) {
        this.duree = duree;
    }

    public String getTheme() {
        return theme;
    }

    public void setTheme(String theme) {
        this.theme = theme;
    }

    public String getSocieteProduction() {
        return societeProduction;
    }

    public void setSocieteProduction(String societeProduction) {
        this.societeProduction = societeProduction;
    }

    public String getResume() {
        return resume;
    }

    public void setResume(String resume) {
        this.resume = resume;
    }
}
