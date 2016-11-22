FILE=tcc

all: $(FILE).pdf cleanlogs

clean:
	rm -f *.aux *.blg *.log *.bbl *.out *.lof *.toc *.lsg

cleanlogs:
	rm -f *.aux *.blg *.log *.bbl *.out *.lof *.toc

$(FILE).pdf: $(FILE).tex src/*tex bib/*bib normas-utf-tex.cls
	pdflatex $(FILE)
	pdflatex $(FILE)
	bibtex $(FILE)
	pdflatex $(FILE)
	pdflatex $(FILE)
