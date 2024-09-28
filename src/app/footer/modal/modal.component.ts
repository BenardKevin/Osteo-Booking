import { Component, ElementRef, AfterViewInit, ViewChild, HostListener, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent implements AfterViewInit {
  @ViewChild('myModal') modal!: ElementRef;
  @ViewChild('myBtn') btn!: ElementRef;
  @ViewChild('closeBtn') span!: ElementRef;

  mentionsLegales1: string = `
    <p>En vertu de l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, il est précisé aux utilisateurs du site internet <a href="http://florine.benard.osteo.free.fr/">http://florine.benard.osteo.free.fr/</a> l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi :</p>
    <ul>
      <li><strong>Propriétaire du site</strong> : FLORINE BENARD<br>
        Contact : <a href="mailto:florine.benard.osteo@free.fr">florine.benard.osteo@free.fr</a> | 06 51 17 12 66<br>
        Adresse : 175 Chem. de la Tourache, 06130 GRASSE, France
      </li>
      <li><strong>Identification de l'entreprise</strong> : Entrepreneur individuel FLORINE BENARD<br>
        Capital social : €<br>
        SIREN : 899607535<br>
        Adresse postale : 175 Chem. de la Tourache, 06130 GRASSE, France
      </li>
      <li><strong>Directeur de la publication</strong> : FLORINE BENARD<br>
        Contact : 06 51 17 12 66
      </li>
      <li><strong>Hébergeur</strong> : FREE<br>
        Adresse : 75371 Paris Cédex 08<br>
        Téléphone : 3244 (service client), 1044 (service commercial)
      </li>
      <li><strong>Délégué à la protection des données</strong> : FLORINE BENARD<br>
        Contact : <a href="mailto:florine.benard.osteo@free.fr">florine.benard.osteo@free.fr</a>
      </li>
      <li><strong>Webmaster</strong> : KEVIN BENARD</li>
        Contact : <a href="https://www.linkedin.com/in/kbenard/">https://www.linkedin.com/in/kbenard/</a>
    </ul>
  `;

  mentionsLegales2: string = `
    <p>FLORINE BENARD est propriétaire des droits de propriété intellectuelle et détient les droits d’usage sur tous les éléments accessibles sur le site internet, notamment les textes, images, graphismes, logos, vidéos, architecture, icônes et sons.</p>
    <p>Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de FLORINE BENARD.</p>
    <p>Toute exploitation non autorisée du site ou de l’un quelconque des éléments qu’il contient sera considérée comme constitutive d’une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.</p>
  `;

  mentionsLegales3: string = `
    <p>FLORINE BENARD ne pourra être tenue responsable des dommages directs et indirects causés au matériel de l’utilisateur, lors de l’accès au site <a href="http://florine.benard.osteo.free.fr/">http://florine.benard.osteo.free.fr/</a>.</p>
    <p>FLORINE BENARD décline toute responsabilité quant à l’utilisation qui pourrait être faite des informations et contenus présents sur <a href="http://florine.benard.osteo.free.fr/">http://florine.benard.osteo.free.fr/</a>.</p>
    <p>FLORINE BENARD s’engage à sécuriser au mieux le site <a href="http://florine.benard.osteo.free.fr/">http://florine.benard.osteo.free.fr/</a>, cependant sa responsabilité ne pourra être mise en cause si des données indésirables sont importées et installées sur son site à son insu.</p>
    <p>Des espaces interactifs (espace contact ou commentaires) sont à la disposition des utilisateurs. FLORINE BENARD se réserve le droit de supprimer, sans mise en demeure préalable, tout contenu déposé dans cet espace qui contreviendrait à la législation applicable en France, en particulier aux dispositions relatives à la protection des données.</p>
    <p>Le cas échéant, FLORINE BENARD se réserve également la possibilité de mettre en cause la responsabilité civile et/ou pénale de l’utilisateur, notamment en cas de message à caractère raciste, injurieux, diffamant, ou pornographique, quel que soit le support utilisé (texte, photographie, etc.).</p>
  `;
  mentionsLegales4: string = `
    <p>Conformément aux dispositions de la loi 78-17 du 6 janvier 1978 modifiée, l’utilisateur du site <a href="http://florine.benard.osteo.free.fr/">http://florine.benard.osteo.free.fr/</a> dispose d’un droit d’accès, de modification et de suppression des informations collectées. Pour exercer ce droit, envoyez un message à notre Délégué à la Protection des Données : FLORINE BENARD - <a href="mailto:florine.benard.osteo@free.fr">florine.benard.osteo@free.fr</a>.</p>
    <p>Pour plus d'informations sur la façon dont nous traitons vos données (type de données, finalité, destinataire...), lisez notre <a href="http://florine.benard.osteo.free.fr/">politique de confidentialité</a>.</p>
  `;

  mentionsLegales5: string = `
    <p>Le site <a href="http://florine.benard.osteo.free.fr/">http://florine.benard.osteo.free.fr/</a> contient des liens hypertextes vers d’autres sites et dégage toute responsabilité à propos de ces liens externes ou des liens créés par d’autres sites vers <a href="http://florine.benard.osteo.free.fr/">http://florine.benard.osteo.free.fr/</a>.</p>
    <p>La navigation sur le site <a href="http://florine.benard.osteo.free.fr/">http://florine.benard.osteo.free.fr/</a> est susceptible de provoquer l’installation de cookie(s) sur l’ordinateur de l’utilisateur.</p>
    <p>Un "cookie" est un fichier de petite taille qui enregistre des informations relatives à la navigation d’un utilisateur sur un site. Les données ainsi obtenues permettent d'obtenir des mesures de fréquentation, par exemple.</p>
    <p>Vous avez la possibilité d’accepter ou de refuser les cookies en modifiant les paramètres de votre navigateur. Aucun cookie ne sera déposé sans votre consentement.</p>
    <p>Les cookies sont enregistrés pour une durée maximale de 12 mois.</p>
    <p>Pour plus d'informations sur la façon dont nous faisons usage des cookies, lisez notre <a href="http://florine.benard.osteo.free.fr/">politique de cookies</a>.</p>
  `;

  mentionsLegales6: string = `
    <p>Tout litige en relation avec l’utilisation du site <a href="http://florine.benard.osteo.free.fr/">http://florine.benard.osteo.free.fr/</a> est soumis au droit français. En dehors des cas où la loi ne le permet pas, il est fait attribution exclusive de juridiction aux tribunaux compétents de GRASSE.</p>
  `;


  ngAfterViewInit(): void {
    if (this.btn && this.btn.nativeElement) {
      this.btn.nativeElement.onclick = () => {
        this.openModal();
      };
    } else {
      console.error('Button element is not initialized.');
    }

    if (this.span && this.span.nativeElement) {
      this.span.nativeElement.onclick = () => {
        this.closeModal();
      };
    } else {
      console.error('Close button element is not initialized.');
    }
  }

  openModal(): void {
    if (this.modal && this.modal.nativeElement) {
      this.modal.nativeElement.style.display = 'block';
    } else {
      console.error('Modal element is not initialized.');
    }
  }

  closeModal(): void {
    if (this.modal && this.modal.nativeElement) {
      this.modal.nativeElement.style.display = 'none';
    } else {
      console.error('Modal element is not initialized.');
    }
  }

  @HostListener('window:click', ['$event'])
  onWindowClick(event: Event): void {
    if (this.modal && this.modal.nativeElement && event.target === this.modal.nativeElement) {
      this.closeModal();
    }
  }
}
