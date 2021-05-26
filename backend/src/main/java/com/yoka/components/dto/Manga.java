package com.yoka.components.dto;

public class Manga extends Theme {

    private String nbChapitre;
    private String theme;
    private String editeur;
    private String type;

    public Manga(String imagePath, String titre, String langue, String dateSortie, String genre, Double note, String nbChapitre, String theme, String editeur, String type) {
        super(imagePath, titre, langue, dateSortie, genre, note);
        this.nbChapitre = nbChapitre;
        this.theme = theme;
        this.editeur = editeur;
        this.type = type;
    }

    public String getNbChapitre() {
        return nbChapitre;
    }

    public void setNbChapitre(String nbChapitre) {
        this.nbChapitre = nbChapitre;
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

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }
}
