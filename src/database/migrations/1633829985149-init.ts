import { MigrationInterface, QueryRunner } from 'typeorm';

export class init1633829985149 implements MigrationInterface {
  name = 'init1633829985149';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "producto" ("id" SERIAL NOT NULL, "producto_sku" character varying(255) NOT NULL, "description" text NOT NULL, "pricio" integer NOT NULL, "create_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "update_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "UQ_3796278fa98d23be7fae6582f67" UNIQUE ("producto_sku"), CONSTRAINT "PK_5be023b11909fe103e24c740c7d" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "plazo" ("id" SERIAL NOT NULL, "numero" integer NOT NULL, "periodo" text NOT NULL, "normal" real, "puntual" real, "create_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "update_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_c51f72fc6b16b0dc1709098a6b4" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "credito" ("id" SERIAL NOT NULL, "abono_normal" numeric(8,2), "abono_puntual" numeric(8,2), "create_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "update_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "productoSku" integer, "plazoId" integer, CONSTRAINT "PK_46669644ff59ead99c71ff4a3f0" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "credito" ADD CONSTRAINT "FK_15416a3a5b762684b7e6c790b13" FOREIGN KEY ("productoSku") REFERENCES "producto"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "credito" ADD CONSTRAINT "FK_7b1643550e13a81a56e504d4cbd" FOREIGN KEY ("plazoId") REFERENCES "plazo"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "credito" DROP CONSTRAINT "FK_7b1643550e13a81a56e504d4cbd"`,
    );
    await queryRunner.query(
      `ALTER TABLE "credito" DROP CONSTRAINT "FK_15416a3a5b762684b7e6c790b13"`,
    );
    await queryRunner.query(`DROP TABLE "credito"`);
    await queryRunner.query(`DROP TABLE "plazo"`);
    await queryRunner.query(`DROP TABLE "producto"`);
  }
}
