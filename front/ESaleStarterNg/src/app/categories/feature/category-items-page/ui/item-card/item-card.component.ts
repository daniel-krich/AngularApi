import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ItemInterface } from 'src/app/shared/interfaces/item.interface';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemCardComponent {
    @Input() item?: ItemInterface;
}
