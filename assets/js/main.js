function checkData() {
    // Holen der Werte von Eingabe und Radio
    const input = parseFloat(document.getElementById('input').value);
    const aufschlag = document.getElementById('aufschlag').checked;
    const abzug = document.getElementById('abzug').checked;
    const neunZehn = document.getElementById('neunZehn').checked;
    const sieben = document.getElementById('sieben').checked;

    // Überprüfen, ob ein Mehrwertsteuersatz ausgewählt wurde
     if (!(aufschlag || abzug)) {
        alert("Bitte wählen Sie eine Berechnungsoption aus!");
        return;
    }
    if (!(neunZehn || sieben)) {
        alert("Bitte wählen Sie einen Mehrwertsteuersatz aus!");
        return;
    }
    if (isNaN(input) || input <= 0) {
        alert("Bitte geben Sie einen Betrag größer als 0 ein!");
        return;
    }


    // Berechnung des Mehrwertsteuerbetrags und Bruttobetrags
    let mehrwertsteuersatz = neunZehn ? 0.19 : 0.07;

    if (aufschlag) {
        const aufschlagBetrag = input * mehrwertsteuersatz;
        const bruttoBetrag = input + aufschlagBetrag;

        // Aktion ausführen
        document.getElementById('result-mw').textContent = aufschlagBetrag.toFixed(2);
        document.getElementById('resultEnd').textContent = bruttoBetrag.toFixed(2);
    } else if (abzug) {
        const abzugBetrag = input / (1 + mehrwertsteuersatz);
        const mehrwertsteuerBetrag = input - abzugBetrag;

        // Aktion ausführen
        document.getElementById('result-mw').textContent = mehrwertsteuerBetrag.toFixed(2);
        document.getElementById('resultEnd').textContent = abzugBetrag.toFixed(2);
    } else {
        alert("!XXX!");
    }
}
