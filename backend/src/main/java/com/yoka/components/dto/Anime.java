package com.yoka.components.dto;

public class Anime extends Theme {

    private String createur;
    private String type;
    private String nbEpisode;
    private String theme;
    private String editeur;
    private String studioAnimation;
    private String resume;

    public Anime(String imagePath, String titre, String langue, String dateSortie, String genre, Double note, String createur, String type, String nbEpisode, String theme, String editeur, String studioAnimation, String resume) {
        super(imagePath, titre, langue, dateSortie, genre, note);
        this.createur = createur;
        this.type = type;
        this.nbEpisode = nbEpisode;
        this.theme = theme;
        this.editeur = editeur;
        this.studioAnimation = studioAnimation;
        this.resume = resume;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getNbEpisode() {
        return nbEpisode;
    }

    public void setNbEpisode(String nbEpisode) {
        this.nbEpisode = nbEpisode;
    }

    public String getTheme() {
        return theme;
    }

    public void setTheme(String theme) {
        this.theme = theme;
    }

    public String getEditeur() {
        return editeur;
    }

    public void setEditeur(String editeur) {
        this.editeur = editeur;
    }

    public String getStudioAnimation() {
        return studioAnimation;
    }

    public void setStudioAnimation(String studioAnimation) {
        this.studioAnimation = studioAnimation;
    }

    public String getResume() {
        return resume;
    }

    public void setResume(String resume) {
        this.resume = resume;
    }

    public String getCreateur() {
        return createur;
    }

    public void setCreateur(String createur) {
        this.createur = createur;
    }
}
